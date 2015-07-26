var searchIndex = {};
searchIndex['tgff'] = {"items":[[0,"","tgff","A parser for the [TGFF][1] (Task Graphs For Free) format.",null,null],[3,"Content","","The content of a TGFF file.",null,null],[12,"attributes","","Global attributes such as `HYPERPERIOD`.",0,null],[12,"graphs","","Task graphs.",0,null],[12,"tables","","Data tables.",0,null],[3,"Graph","","A task graph.",null,null],[12,"name","","The name of the graph.",1,null],[12,"id","","The ID of the graph.",1,null],[12,"attributes","","Graph attributes such as `PERIOD`.",1,null],[12,"tasks","","Vertices representing tasks.",1,null],[12,"arcs","","Edges representing dependencies between the tasks.",1,null],[12,"deadlines","","Hard deadlines of a subset of the tasks.",1,null],[3,"Task","","A node in a graph representing a task.",null,null],[12,"id","","The ID of the task.",2,null],[12,"kind","","The type of the task.",2,null],[3,"Arc","","An edge in a graph connecting two tasks.",null,null],[12,"id","","The ID of the arc.",3,null],[12,"from","","The ID of the source task.",3,null],[12,"to","","The ID of the destination task.",3,null],[12,"kind","","The type of the arc.",3,null],[3,"Deadline","","The deadline of a task.",null,null],[12,"id","","The ID of the deadline.",4,null],[12,"on","","The ID of the task.",4,null],[12,"at","","The time associated with the deadline.",4,null],[3,"Table","","A data table.",null,null],[12,"name","","The name of the table.",5,null],[12,"id","","The ID of the table.",5,null],[12,"attributes","","Table attributes.",5,null],[12,"columns","","The columns of the table.",5,null],[3,"Column","","A column of a table.",null,null],[12,"name","","The name of the column.",6,null],[12,"data","","The data contained in the column.",6,null],[3,"Error","","A parsing error.",null,null],[12,"line","","The line on which the error occurred.",7,null],[12,"message","","The description of the error.",7,null],[5,"parse","","Parse a string containing a TGFF file.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[6,"Result","","An outcome of parsing.",null,null],[11,"fmt","","",7,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Content"],[3,"Graph"],[3,"Task"],[3,"Arc"],[3,"Deadline"],[3,"Table"],[3,"Column"],[3,"Error"]]};
initSearch(searchIndex);