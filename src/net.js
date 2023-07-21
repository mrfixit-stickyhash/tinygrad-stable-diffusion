import { GPUBufferUsage } from 'webgpu';

const getTensorMetadata = (safetensorBuffer) => {
  // ... (rest of the code remains unchanged)
};

const getTensorBuffer = (safetensorBuffer, tensorMetadata) => {
  // ... (rest of the code remains unchanged)
};

const createEmptyBuf = (device, size) => {
  // ... (rest of the code remains unchanged)
};

const createWeightBuf = (device, size, data) => {
  // ... (rest of the code remains unchanged)
};

const addComputePass = (device, commandEncoder, pipeline, bufs, workgroup) => {
  // ... (rest of the code remains unchanged)
};

// efficientnet_kernel code and setupNet function remain unchanged

const setupNet = async (device, safetensor) => {
  // Implementation of the setupNet function
};

export {
  setupNet,
  getTensorMetadata,
  getTensorBuffer,
  createEmptyBuf,
  createWeightBuf,
  addComputePass,
};
