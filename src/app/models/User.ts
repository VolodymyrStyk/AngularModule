type address = {
  street: string;
  city: string;
  suite: string;
}


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
}
