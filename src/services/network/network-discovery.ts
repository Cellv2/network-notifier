export interface NetworkDiscoveryInterface {
    getAddressesOnNetwork: () => string[];
}

export class NetworkDiscovery implements NetworkDiscoveryInterface {
    getAddressesOnNetwork (): string[] {
        return [];
    };
}
