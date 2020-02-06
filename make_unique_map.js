
var result = {};
var input = [
{
    "widgetName": "ph-slider",
    "version": "v1",
    "viewName": "default",
    "theme": "v1"

},

{
    "widgetName": "ph-slider",
    "version": "v1",
    "viewName": "custom",
    "theme": "v1"

},

{
    "widgetName": "ph-slider",
    "version": "v2",
    "viewName": "default",
    "theme": "v1"

},
{
    "widgetName": "ph-category-overview",
    "version": "v1",
    "viewName": "default",
    "theme": "v1"

},
{
    "widgetName": "ph-category-overview",
    "version": "v1",
    "viewName": "new-comer",
    "theme": "v1"

},
{
    "widgetName": "ph-category-overview",
    "version": "v1",
    "viewName": "fina-updated-view",
    "theme": "v1"

},
{
    "widgetName": "ph-category-overview",
    "version": "v1",
    "viewName": "fina-updated-view",
    "theme": "v1"

}
];

exsits = false;

input.forEach(item => {
    console.log('Each item: {}', item.widgetName);
});
for (let key of input) {
    let temp = [];
    let viewObj = { 'viewName': key.viewName, "displayName": key.viewName };
    let curView = key.viewName;
    let widgetTag = key.widgetName + '-' + key.version;
    if (result.hasOwnProperty(widgetTag)) {
        temp = result[widgetTag];
        var filtered = temp.find(a => a.viewName == curView);
        if (!filtered) {
            temp.push(viewObj);
        }

    } else {
        temp.push(viewObj);
        result[widgetTag] = temp;
    }
}

// var filtered = input.find(a => a.viewName == "default");
// console.log(' Filtered input is ' + filtered);

console.log('Final result is ', result);
