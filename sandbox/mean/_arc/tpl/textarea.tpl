<fieldset>
    <label for="{{element.name}}">{{element.label}}</label>
    <textarea name="{{element.name}}"
              id="{{element.name}}"
              ng-model="element.value"
              ng-click="tip=true"
              ng-blur="tip=false"
              placeholder="{{element.placeholder}}"
              ng-disabled="(include.status === 'disabled') ? include.status : ''"
              ng-required="(include.status === 'required') ? include.status : ''">{{element.value}}</textarea>
    <ng-include src="'tpl/error.tpl'"></ng-include>
    <ng-include src="'tpl/tip.tpl'"></ng-include>
</fieldset>