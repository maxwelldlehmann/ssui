export interface textField {
	label: string;
	defaultValue: string;
	placeholder: string;
	required: boolean;
	asyncValidation: (value: string) => boolean;
}

export type checkboxField = {
	label: string;
	defaultValue: boolean;
	required: boolean;
};

export interface selectField {
	label: string;
	options: string[];
	defaultValue: string;
}

type fields = textField | selectField;

export type section = fields[];

export type form = {
	sections: section[];
	title: string;
	description: string;
};
