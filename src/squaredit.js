var i;

var scrolly = new tabris.ScrollView({
  left: 3, right: 3, top: 3, bottom: 45,
  direction: "vertical"
}).appendTo(tabris.ui.contentView);

var scrollx = new tabris.ScrollView({
  left: 3, right: 3, top: 3, bottom: 45,
  direction: "horizontal"
}).appendTo(tabris.ui.contentView);

var one = new tabris.Composite({
  layoutData: {centerX: 0, centerY: 0, height: 201, width: 201},
  background: "black"
}).appendTo(scrolly);

var two = new tabris.Composite({
  top: 1, left: 1, right: 1, bottom: 1,
  background: "white"
}).appendTo(one);

var scrol = new tabris.CheckBox({
  bottom: 5, left: 15
}).on("change:selection", function(checkBox, selection){
  i = selection ? scrollx : scrolly;
  if (i == scrollx) {
    scrolly.enabled = false
    scrollx.enabled = true
    console.log("X Enabled")
    scrolly.set({layoutData: {height: 0, width: 0}})
    scrollx.set({layoutData: {left: 3, right: 3, top: 3, bottom: 45}})
    
  } else {
    scrolly.enabled = true
    scrollx.enabled = false
    console.log("Y Enabled")
    scrollx.set({layoutData: {height: 0, width: 0}})
    scrolly.set({layoutData: {left: 3, right: 3, top: 3, bottom: 45}})
  }
  one.appendTo(i)
}).appendTo(tabris.ui.contentView);

var height = new tabris.TextInput({
  keyboard: "number",
  bottom: 5, left: [scrol, 5],
  message: "Height"
}).on("input", function(text){
  one.set({layoutData: {centerX: 0, centerY: 0, height: height.get("text"), width: one.get("width")}})
}).appendTo(tabris.ui.contentView);

var width = new tabris.TextInput({
  keyboard: "number",
  bottom: 5, left: [height, 5],
  message: "Width"
}).on("input", function(text){
  one.set({layoutData: {centerX: 0, centerY: 0, width: width.get("text"), height: one.get("height")}})
}).appendTo(tabris.ui.contentView);

var cornerRad = new tabris.TextInput({
  keyboard: "number",
  bottom: 5, left: [width, 5],
  message: "CornerRadius"
}).on("input", function(text){
  if (cornerRad.get("text") == ""){
    one.set({cornerRadius: 0})
    two.set({cornerRadius: 0})
  } else {
  one.set({cornerRadius: cornerRad.get("text")})
  two.set({cornerRadius: cornerRad.get("text")})
  }
}).appendTo(tabris.ui.contentView);

var Color = new tabris.TextInput({
  bottom: 5, left: [cornerRad, 5],
  message: "Color"
}).on("accept", function(text){
  if (!Color.get("text") == ""){
  two.set({background: Color.get("text")})
  }
}).appendTo(tabris.ui.contentView);
      
