// undirected graph

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertexName){
        if(!this.adjacencyList[vertexName]){
            this.adjacencyList[vertexName] = [];
        }
    }

    addEdge(vertex1, vertex2){
        // check that vertex exists before adding.
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        // if directed graph, you do not have to add both to each other. You can just do one.
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
    
        // if directed graph, you do not have to remove both to each other. You can just do one.
        if(this.adjacencyList[vertex1] )this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1);
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1);
    }
}

let g = new Graph();
g.addVertex('a')
g.addVertex('b')

g.addEdge('a','b');
g.addEdge('a','c')

console.log(g.adjacencyList)

g.removeEdge('a', 'b');

console.log(g.adjacencyList)