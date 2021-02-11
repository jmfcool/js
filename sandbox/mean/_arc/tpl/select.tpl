<fieldset>
    <label for="{{element.name}}">{{element.label}}</label>
    <select name="{{element.name}}"
            id="{{element.name}}"
            ng-model="element.value"
            ng-options="option for option in element.options"
            ng-click="tip=true"
            ng-blur="tip=false"
            ng-disabled="(include.status === 'disabled') ? include.status : ''"
            ng-required="(include.status === 'required') ? include.status : ''">
    </select>
    <ng-include src="'tpl/error.tpl'"></ng-include>
    <ng-include src="'tpl/tip.tpl'"></ng-include>
</fieldset>