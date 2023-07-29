<script setup lang="ts">
import * as THREE from "three";
//console.log(THREE);
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 创建场景
const scene = new THREE.Scene();
// 创建相机
// 透视相机

const camera = new THREE.PerspectiveCamera(
  45, // 视角
  window.innerWidth / window.innerHeight, // 宽高比
  1, // 近平面
  1000 // 远平面
);
// 设置相机位置
camera.position.set(0, 0, 100);

scene.add(camera);

// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// 创建材质
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 缩放

cube.scale.set(10, 2, 10);
cube.rotation.set(Math.PI / 4, Math.PI / 4, Math.PI / 4);
scene.add(cube);

// 创建渲染器

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// 将渲染器的dom元素添加到body中
document.body.appendChild(renderer.domElement);

// 渲染
// 传入场景和相机
renderer.render(scene, camera);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 坐标轴辅助线

const axesHelper = new THREE.AxesHelper(100);

scene.add(axesHelper);


// 控制器自动旋转
function render() {
  controls.update();
  cube.position.x += 0.1;
  if (cube.position.x > 50) {
    cube.position.x = 0;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();



</script>
<template>
  <div>
    01-basic
  </div>
</template>
