// https://stackoverflow.com/questions/48759035/mock-dependency-in-jest-with-typescript
// https://jestjs.io/docs/mock-function-api/#jestmockedsource-options
// https://jestjs.io/docs/es6-class-mocks
// https://kulshekhar.github.io/ts-jest/docs/guides/mock-es6-class

import {
    NetworkDiscovery,
    NetworkDiscoveryInterface,
} from "./network-discovery";

jest.mock("./network-discovery");
const mockedService = jest.mocked(NetworkDiscovery);

beforeEach(() => {
    mockedService.mockClear();
});

describe("local network devices", () => {
    test("are listed correctly", () => {
        expect(mockedService).toHaveBeenCalledTimes(1); // obv wrong, just testing stuff
    });
});

// import {
//     NetworkDiscovery,
//     NetworkDiscoveryInterface,
// } from "./network-discovery";

// jest.mock("./network-discovery", () => {

// });

// // const mocked = <jest.Mock<NetworkDiscoveryInterface>>NetworkDiscovery;
// const mocked = <jest.Mock<NetworkDiscovery>>NetworkDiscovery;

// beforeEach(() => {
//     mocked.mockClear();
// });

// describe("local network devices", () => {
//     test("are listed correctly", () => {
//         mocked.
//         expect(mocked).toHaveBeenCalledTimes(1);
//     });
// });
