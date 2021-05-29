type Address = {
  city: string;
  street: string;
  number: number;
};

export interface UserWithAdd{
  id: number;
    name: string;
    age:number;
    isMarried: boolean;
    address: Address;
}
