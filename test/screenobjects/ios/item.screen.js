class ItemScreen{
get createItem(){
    return  $('//*[@value="Create item"]')
}
get titleField(){
    return  $('//*[@value="Title"]')
}
get dueField(){
    return $('//*[@value="Due"]')
}
}
module.exports = new ItemScreen();


