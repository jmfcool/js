var mvc = mvc || {};

mvc.loader = (args) =>
{
    this.template = args.template;
};

mvc.loader.prototype.load = (args) => this.template;
