export interface User {
  email: string;
  gender: string;
  name: Name;
  phone: string;
  location: Location;
  picture: Picture;
  dob: Age;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  postcode: number;
  street: {
    number: number;
    name: string;
  }
}

export interface Picture {
  large: string;
  medium: string;
  thumbnaul: string;
}

export interface Age {
    age: number;
    date: string;
}
