<div ng-messages="incidentForm[element.name].$error" ng-if="incidentForm[element.name].$touched">
    <div ng-repeat="error in include.errors">
        <p ng-repeat="(key,value) in error" ng-message="{{key}}">{{value}}</p>
    </div>
</div>