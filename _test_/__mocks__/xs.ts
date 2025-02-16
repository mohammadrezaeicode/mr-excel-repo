import { jest } from "@jest/globals";

const JSZip = jest.fn();

JSZip.mockImplementation(() => {
  return {
    loadAsync: jest.fn(),
    generateAsync: jest.fn<any>().mockResolvedValue({
      slice: jest.fn().mockReturnValue("mockedValue"),
    }), // Mocking generateAsync to return a resolved promise
  };
});

export default JSZip; // Mocking the default export
