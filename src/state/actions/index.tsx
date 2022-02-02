interface IAddItemAction {
  type: 'additem';
  itemType: string;
  _id: string;
  title: string;
  body?: string;
  creator: string;
  _v: string;
}

interface IRemoveItemAction {
  type: 'removeitem';
  _id: string;
  itemType: string;
}

interface IFetchItemsAction {
  type: 'fetchitems';
  itemType: string;
  items: Array<{ _id: string; title: string; body: string; creator: string; type: string; _v: string }>;
}

export type Action = IAddItemAction | IRemoveItemAction | IFetchItemsAction;
