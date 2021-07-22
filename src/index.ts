import { exit } from "process";
import { LedMatrix, isSupported } from "rpi-led-matrix";

if (!isSupported) {
  console.warn("LED panel not supported, Exiting");
  exit(0);
}
console.log("Starting Leetcode Stats LED panel");

const matrix = new LedMatrix({ ...LedMatrix.defaultMatrixOptions() }, { ...LedMatrix.defaultRuntimeOptions() });
