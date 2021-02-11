var mvc = mvc || {};

mvc.tagging = {
    formatters : 
    {
        string : 
        {
            this : function(o) { if (typeof o != 'string') o = (o).toString(); return o; },
            currency : function(o) { if (typeof o == 'number') o = (o).toFixed(2); return o; }  
        } 
    },
    tagger : function() {}    
};

mvc.tagging.tagger.prototype.render = (args) => 
{
    const template = args.template;
    const data = args.model;
    const loader = args.loader;
    const template = loader.load({ template:template });
    return mvc.tagging.template({ template:template, data:data });
};

mvc.tagging.template = (args) =>
{
    var template = args.template,
        data = args.data,
        tags, tag, obj, tmp, filter;

    filter = /\$\{([^}]*)}/g;

    if(template.match(filter) === null) return template;

    tags = template.match(filter);

    filter = /\$\{([^}]*)}/;

    for(var i=0; i<tags.length; i++)
    {
        tag = tags[i].match(filter)[0];
        obj = tags[i].match(filter)[1];
        tmp = mvc.tagging.evaluator({ data:data, obj:obj, type:'tags' });
        template = template.replace(tag,tmp);
    }

    return template;
};

mvc.tagging.evaluator = (args) =>
{
    var obj = args.obj,
        item = args.data,
        type = args.type;

    if(type === 'tags') object = mvc.tagging.getObject({ obj:obj, item:item });

    return object;
};

mvc.tagging.getObject = (args) =>
{
    var obj = args.obj,
        item = args.item,
        lookup;

    if(/\?/.test(obj))
    {
        obj = obj.split('?');
        obj = obj[0];
    }

    lookup = obj.split('.');

    for (var i=0; i<lookup.length; i++)
    {
        item = item[lookup[i]];

        if (item === undefined) return '';

        if(/\?/.test(args.obj))
        {
            var checks, formatter;
                checks = args.obj.split('?');

            formatter = mvc.tagging.getFormatter({ checks:checks[1] });
            item = formatter(item);
        }
    }

    return item;
};

mvc.tagging.getFormatter = (args) =>
{
    var checks = args.checks,
        obj = mvc.tagging.formatters,
        check = checks.split('.');

    for (var i=0; i<check.length; i++)
    {
        obj = obj[check[i]];
        if (obj === undefined) return null;
    }

    return obj;
};
