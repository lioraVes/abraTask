//abstract class for Place

export abstract class Place {
    name: string;
    type: string
    address: string;

    constructor(name: string, type: string, address: string) {
        this.name = name;
        this.type = type;  
        this.address = address;
    }
} 
