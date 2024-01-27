export interface InvoiceData {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: 'paid' | 'pending' | 'draft';
  senderAddress: SenderAddress;
  clientAddress: ClientAddress;
  items: Item[];
  total: number;
}

export interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface ClientAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
