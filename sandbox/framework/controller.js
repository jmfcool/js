const controller = {};

controller.template = (args) => {

    const type = args.type
    const name = args.name;
    const temp = args.template;

    if(type === 'inline') { return document.getElementsByTagName(name); }
    if(type === 'external') 
    {
		let http = new XMLHttpRequest();
		http.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				controller.process(this.responseText);
			}
		};
		http.open("GET", temp, true);
		http.send();

		return document.getElementsByTagName(name);
    }
};

controller.process = (response) => {

	let template = controller.template({ type:'external', name:'body', template:'example.tpl.html' });
    let loader = new mvc.loader({ template:response });
    let tagger = new mvc.tagging.tagger();
    let render = tagger.render({ loader:loader, model:model });

    template[0].innerHTML = render;
};

controller.init = () => {
	controller.process();
};

window.addEventListener("load",controller.init,false);