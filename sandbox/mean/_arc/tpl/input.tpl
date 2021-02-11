<fieldset>
    <label for="{{element.name}}">{{element.label}}</label>
    <input name="{{element.name}}"
           id="{{element.name}}"
           ng-model="element.value"
           ng-click="tip=true"
           ng-blur="tip=false"
           ng-minlength="5"
           placeholder="{{element.placeholder}}"
           ng-disabled="(include.status === 'disabled') ? include.status : ''"
           ng-required="(include.status === 'required') ? include.status : ''">
    <ng-include src="'tpl/error.tpl'"></ng-include>
    <ng-include src="'tpl/tip.tpl'"></ng-include>
</fieldset>