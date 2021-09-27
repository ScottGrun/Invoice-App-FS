export interface Root {
	COLORS: Colors;
}

export interface Colors {
	body: Body;
	header: Header;
	aside: Aside;
	dropdown: Dropdown;
	checkbox: Checkbox;
	button: Button;
	invoiceCard: InvoiceCard;
	invoiceDetails: InvoiceDetails;
	invoiceDetailsTable: InvoiceDetailsTable;
	statusBadge: StatusBadge;
	text: Text;
	drawer: Drawer;
	form: Form;
	itemField: ItemField;
	emptyState: EmptyState;
}

export interface Body {
	bg: string;
	color: string;
}

export interface Header {
	headerColor: string;
	subHeaderColor: string;
}

export interface Aside {
	bg: string;
	color: string;
	border: string;
}

export interface Dropdown {
	color: string;
	itemColor: string;
	itemSelectedColor: string;
}

export interface Checkbox {
	bgEmpty: string;
	bgChecked: string;
	borderChecked: string;
}

export interface Button {
	primary: Primary;
	secondary: Secondary;
	tertiary: Tertiary;
	warning: Warning;
}

export interface Primary {
	bg: string;
	color: string;
	hover: string;
}

export interface Secondary {
	bg: string;
	color: string;
	hover: string;
}

export interface Tertiary {
	bg: string;
	color: string;
	hover: string;
}

export interface Warning {
	bg: string;
	color: string;
	hover: string;
}

export interface InvoiceCard {
	id: string;
	dueDate: string;
	clietName: string;
	total: string;
}

export interface InvoiceDetails {
	bg: string;
}

export interface InvoiceDetailsTable {
	heading: string;
	bg: string;
	totalSection: TotalSection;
}

export interface TotalSection {
	bg: string;
	color: string;
}

export interface StatusBadge {
	paid: Paid;
	pending: Pending;
	draft: Draft;
}

export interface Paid {
	bg: string;
	color: string;
}

export interface Pending {
	bg: string;
	color: string;
}

export interface Draft {
	bg: string;
	color: string;
}

export interface Text {
	h1: string;
	body1: string;
	body2: string;
}

export interface Drawer {
	bg: string;
}

export interface Form {
	sectionLabel: string;
	inputLabel: string;
	inputValue: string;
	inputBorderColor: string;
	itemListHeader: string;
}

export interface ItemField {
	deleteBtn: string;
	total: string;
}

export interface EmptyState {
	heading: string;
	message: string;
}
