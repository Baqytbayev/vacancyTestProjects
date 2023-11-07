
interface IName {
    title: string;
    first: string;
    last: string;
  }
  
  interface Street {
    number: number;
    name: string;
  }
  
  interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  interface Timezone {
    offset: string;
    description: string;
  }
  
  interface ILocation {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
  }
  
  interface ILogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  
  interface IDob {
    date: string;
    age: number;
  }
  
  interface IRegistered {
    date: string;
    age: number;
  }
  
  interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface Id {
    name: string;
    value: string;
  }
  
 
export default interface IRandom {
    gender: string;
    name: IName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: IDob;
    registered: IRegistered;
    phone: string;
    cell: string;
    id: Id;
    picture: IPicture;
    nat: string;

  }
  type InfoProps =  {
    image: string,
    gender: string,
    text: string
}
  export interface IRandomState {
    random: {
     results: InfoProps; 
   };
   loading: boolean;
 }
 
 export default interface IProductsState {
     products: IRandom[]
     loadingProducts: boolean
 }
 