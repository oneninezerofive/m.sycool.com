import Vue from 'vue';

import {
	container,
	form,
	formItem,
	input,
	button,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Header,
	Aside,
	Main,
	Footer,
	Table,
	TableColumn,
	Alert,
	MessageBox,
	Message,
	Image,
	Pagination,
} from 'element-ui';

export default () => {
	Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	Vue.prototype.$message = Message;
	Vue.use(container)
		.use(form).use(formItem).use(input)
		.use(button)
		.use(Menu)
		.use(Submenu)
		.use(MenuItem)
		.use(MenuItemGroup)
		.use(Header)
		.use(Aside)
		.use(Main)
		.use(Footer)
		.use(Table)
		.use(TableColumn)
		.use(Alert)
		.use(Image)
		.use(Pagination)
}
