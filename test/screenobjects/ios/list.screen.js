class ListScreen{
 get createListButton (){
   return  $('//*[@name="Create list"]')
 } 
 get listNameInput (){
   return  $('//XCUIElementTypeTextField[@value="List Name"]')
 } 
 get createButton (){
   return  $("~Create")
 } 
  listNameField (name){
   return  $(`~${name}`)
 } 
}
export default new ListScreen();