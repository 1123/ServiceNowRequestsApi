(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	return getScRequestItems();
})(request, response);

function getScRequestItems() {
	var gr = new GlideRecord("sc_req_item");
	gr.setLimit(10);
    gr.query();
	var requests = [];
	while (gr.next()) {
		var sc_request = {};
		sc_request.number = gr.number + '';
        sc_request.short_description = gr.short_description + '';
		sc_request.sys_id = gr.sys_id + '';
		var mtoms = getItemOptionMtoms(sc_request.sys_id);
		var options = mtoms.map(function(mtom) {
			return getItemOption(mtom.sc_item_option);
        });
		sc_request.mtoms = mtoms;
		sc_request.options = options;
		requests.push(sc_request);
    }
	return requests;
}

function getItemOptionMtoms(requestItemId) {
	var gr = new GlideRecord("sc_item_option_mtom");
	gr.addQuery('request_item', requestItemId);
	gr.setLimit(10);
    gr.query();
	var mtoms = [];
	while (gr.next()) {
		var mtom = {};
		mtom.request_item = gr.request_item + '';
        mtom.sc_item_option = gr.sc_item_option + '';
		mtoms.push(mtom);
    }
	return mtoms;
}

function getItemOption(itemOptionId) {
	var gr = new GlideRecord("sc_item_option");
	gr.addQuery('sys_id', itemOptionId);
	gr.addJoinQuery('item_option_new');
	gr.setLimit(10);
    gr.query();
	var result = [];
	while (gr.next()) {
		var element = {};
		element.item_option_new = gr.item_option_new;
        element.value = gr.value + '';
		element.name = gr.item_option_new.name + '';
		result.push(element);
    }
	return result;
}

