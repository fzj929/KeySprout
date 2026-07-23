import * as THREE from 'three';

const mount = document.getElementById('hands3d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (mount) {
  try {
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-10, 10, 3.2, -3.2, 0.1, 50);
    camera.position.set(0, -5.8, 17);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0xfff7e8, 0x6e8278, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffdfc2, 3.4);
    keyLight.position.set(-4, -3, 12);
    keyLight.castShadow = true;
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xb9d6ff, 1.25);
    fillLight.position.set(6, 4, 8);
    scene.add(fillLight);

    const skin = new THREE.Color(0xe9ab87);
    const skinShadow = new THREE.Color(0xc57f62);
    const accent = new THREE.Color(0xd84c2f);
    const nailColor = new THREE.Color(0xffe7dd);
    const handModels = new Map();

    function skinMaterial() {
      return new THREE.MeshPhysicalMaterial({
        color: skin.clone(),
        roughness: 0.56,
        clearcoat: 0.16,
        clearcoatRoughness: 0.7,
        transparent: true,
        opacity: 0.34,
        depthWrite: false
      });
    }

    function nailMaterial() {
      return new THREE.MeshPhysicalMaterial({
        color: nailColor,
        roughness: 0.35,
        clearcoat: 0.5,
        transparent: true,
        opacity: 0.48,
        depthWrite: false
      });
    }

    function makeCapsule(radius, totalLength, material) {
      const geometry = new THREE.CapsuleGeometry(
        radius,
        Math.max(0.03, totalLength - radius * 2),
        10,
        20
      );
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      return mesh;
    }

    function makeSoftVolume(scale, position, material, segments = 24) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, segments, Math.max(12, segments / 2)),
        material
      );
      mesh.scale.set(...scale);
      mesh.position.set(...position);
      mesh.castShadow = true;
      return mesh;
    }

    function createFinger(
      name,
      baseX,
      baseY,
      totalLength,
      radius,
      rotationZ = 0,
      ratios = [0.44, 0.32, 0.24]
    ) {
      const root = new THREE.Group();
      root.position.set(baseX, baseY, 0.12);
      root.rotation.z = rotationZ;

      const joints = [];
      const materials = [];
      let parent = root;

      ratios.forEach((ratio, index) => {
        const length = totalLength * ratio;
        const joint = new THREE.Group();
        const material = skinMaterial();
        const segmentRadius = radius * (1 - index * 0.095);
        const fleshOverlap = segmentRadius * 0.42;
        const segment = makeCapsule(
          segmentRadius,
          length + fleshOverlap,
          material
        );
        segment.position.y = length / 2;
        segment.scale.z = 0.78;
        joint.add(segment);

        // 关节软组织略宽于指骨并与前后指节重叠，弯曲时不会出现机械式缝隙。
        const knuckleMaterial = skinMaterial();
        const knuckle = makeSoftVolume(
          [segmentRadius * 1.08, segmentRadius * 0.88, segmentRadius * 0.8],
          [0, 0, 0.015],
          knuckleMaterial,
          20
        );
        joint.add(knuckle);

        parent.add(joint);
        joints.push(joint);
        materials.push(material, knuckleMaterial);

        if (index === ratios.length - 1) {
          const nail = new THREE.Mesh(
            new THREE.SphereGeometry(segmentRadius * 0.62, 24, 12),
            nailMaterial()
          );
          nail.scale.set(0.77, 1.28, 0.18);
          nail.position.set(0, length * 0.71, segmentRadius * 0.77);
          joint.add(nail);
        }

        const next = new THREE.Group();
        next.position.y = length;
        joint.add(next);
        parent = next;
      });

      return { name, root, joints, materials, baseRotationZ: rotationZ };
    }

    function createHand(handName, mirror) {
      const group = new THREE.Group();
      group.position.set(mirror * 3.25, -0.55, 0);
      group.rotation.z = mirror * -0.045;
      group.scale.setScalar(0.92);
      const baseMaterials = [];

      const wristMaterial = skinMaterial();
      const wrist = makeCapsule(0.72, 2.15, wristMaterial);
      wrist.scale.set(1.22, 1, 0.52);
      wrist.position.set(0, -1.62, -0.12);
      group.add(wrist);
      baseMaterials.push(wristMaterial);

      const palmMaterial = skinMaterial();
      const palm = makeSoftVolume(
        [1.58, 1.36, 0.39],
        [0, -0.3, 0],
        palmMaterial,
        36
      );
      group.add(palm);
      baseMaterials.push(palmMaterial);

      const backMaterial = skinMaterial();
      backMaterial.color.copy(skinShadow).lerp(skin, 0.62);
      const knuckles = makeSoftVolume(
        [1.46, 0.66, 0.32],
        [0, 0.47, 0.05],
        backMaterial,
        32
      );
      group.add(knuckles);
      baseMaterials.push(backMaterial);

      // 大鱼际、小鱼际与四根掌骨让手掌轮廓更接近真实手背，而不是一个椭圆球。
      [
        [mirror * -0.86, -0.28, 0.08, 0.68, 0.93, 0.3],
        [mirror * 1.02, -0.24, 0.04, 0.48, 0.9, 0.27]
      ].forEach(([x, y, z, sx, sy, sz]) => {
        const padMaterial = skinMaterial();
        const pad = makeSoftVolume([sx, sy, sz], [x, y, z], padMaterial, 24);
        group.add(pad);
        baseMaterials.push(padMaterial);
      });

      const fingerSpecs = [
        ['小指', mirror * 1.16, 0.42, 1.78, 0.245, mirror * -0.085, [0.43, 0.33, 0.24]],
        ['无名指', mirror * 0.58, 0.56, 2.28, 0.275, mirror * -0.025, [0.44, 0.32, 0.24]],
        ['中指', 0, 0.61, 2.52, 0.285, 0, [0.43, 0.325, 0.245]],
        ['食指', mirror * -0.6, 0.56, 2.32, 0.285, mirror * 0.028, [0.45, 0.31, 0.24]]
      ];
      const fingers = new Map();

      fingerSpecs.forEach(spec => {
        const bridgeMaterial = skinMaterial();
        const bridge = makeCapsule(spec[4] * 1.03, 0.68, bridgeMaterial);
        bridge.scale.set(1.06, 1, 0.77);
        bridge.position.set(spec[1], spec[2] - 0.24, 0.1);
        bridge.rotation.z = spec[5];
        group.add(bridge);
        baseMaterials.push(bridgeMaterial);

        const finger = createFinger(...spec);
        group.add(finger.root);
        fingers.set(finger.name, finger);
      });

      const thumb = createFinger(
        '拇指',
        mirror * -1.25,
        -0.25,
        1.78,
        0.305,
        mirror * 0.88,
        [0.58, 0.42]
      );
      group.add(thumb.root);
      fingers.set('拇指', thumb);

      // 指根之间的蹼状软组织填补视觉空洞，同时保留各根手指清晰轮廓。
      [
        mirror * 0.87,
        mirror * 0.29,
        mirror * -0.3
      ].forEach((x, index) => {
        const webMaterial = skinMaterial();
        const web = makeSoftVolume(
          [0.28, 0.34 - index * 0.012, 0.2],
          [x, 0.63, -0.015],
          webMaterial,
          20
        );
        group.add(web);
        baseMaterials.push(webMaterial);
      });

      scene.add(group);
      const model = {
        name: handName,
        group,
        fingers,
        materials: baseMaterials
      };
      handModels.set(handName, model);
    }

    createHand('左手', -1);
    createHand('右手', 1);

    let activeState = window.KeySproutFingerState || { hand: '', finger: '' };
    let stateChangedAt = performance.now();

    function setFingerState(next = {}) {
      activeState = { hand: next.hand || '', finger: next.finger || '' };
      stateChangedAt = performance.now();
    }

    window.addEventListener('keysprout:finger', event => setFingerState(event.detail));
    setFingerState(activeState);

    function damp(current, target, factor = 0.13) {
      return current + (target - current) * factor;
    }

    function resize() {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      renderer.setSize(width, height, false);
      const viewHeight = 6.35;
      const viewWidth = viewHeight * (width / height);
      camera.left = -viewWidth / 2;
      camera.right = viewWidth / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    function animate(time) {
      const elapsed = time - stateChangedAt;
      const tapWave = reduceMotion
        ? 0
        : Math.sin(Math.min(elapsed, 520) / 520 * Math.PI);

      handModels.forEach(model => {
        const handIsActive =
          activeState.hand === model.name || activeState.hand === '任意手';
        model.group.position.z = damp(
          model.group.position.z,
          handIsActive ? 0.12 + Math.sin(time * 0.0024) * 0.025 : 0
        );

        model.materials.forEach(material => {
          material.opacity = damp(material.opacity, handIsActive ? 0.43 : 0.26);
          material.color.lerp(handIsActive ? skin : skinShadow, 0.08);
        });

        model.fingers.forEach(finger => {
          const isActive = handIsActive && finger.name === activeState.finger;
          const press = isActive ? 0.23 + tapWave * 0.34 : 0;
          const restingCurl = finger.name === '拇指' ? 0.1 : 0.055;

          finger.root.rotation.z = damp(
            finger.root.rotation.z,
            finger.baseRotationZ
          );
          finger.joints.forEach((joint, index) => {
            const targetCurl =
              restingCurl * (index + 1) +
              press * (index === 0 ? -0.42 : 0.28);
            joint.rotation.x = damp(joint.rotation.x, targetCurl, 0.16);
          });

          finger.materials.forEach(material => {
            material.color.lerp(isActive ? accent : skin, isActive ? 0.2 : 0.08);
            material.opacity = damp(
              material.opacity,
              isActive ? 0.76 : handIsActive ? 0.46 : 0.28
            );
          });
        });
      });

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
    renderer.render(scene, camera);
    document.body.classList.add('three-ready');

    window.addEventListener(
      'pagehide',
      () => {
        renderer.setAnimationLoop(null);
        observer.disconnect();
        renderer.dispose();
      },
      { once: true }
    );
  } catch (error) {
    console.warn('KeySprout 3D hands unavailable; using SVG fallback.', error);
    document.body.classList.add('three-fallback');
  }
}
