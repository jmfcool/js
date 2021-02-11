<fieldset>
    <input type="checkbox" name="{{element.name}}" ng-model="element.value"><span>{{element.label}}</span>
    <ng-include src="'tpl/error.tpl'"></ng-include>
    <ng-include src="'tpl/tip.tpl'"></ng-include>
</fieldset>