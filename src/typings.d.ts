/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var wx: any;
declare var WeixinJSBridge: any;
interface Field {
  key: string, label: string, value: any, controlType: string, validators?: any
}

interface Admin {
  _id?: string;
  nickname: string;
  phone: string;
  password: string;
  repassword?: string;
}
interface FruitUser {
  _id?: string;
  adminId?: string;
  nickname?: string;
  phone?: string;
  password?: string;
  repassword?: string;
}

interface Field {

  key: string, label: string, value: any, controlType: string, validators?: any;
}

interface FruitProductGroup {
  _id?: string;
  name?: string;
  image?: any;
  products?: any[]
  createDt?: Date;
  isRecommand?: boolean;
}

interface FruitProduct {
  _id?: string;
  price: number;
  summary: number;
  store: number;
  name: string;
  images: string[];
  group: any;
  createDt?: Date;
  isRecommand?: boolean;

}
