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
        if(this.adjacencyList[vertex1] ){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
        }
    }

    removeVertex(vertexToRemove){
        if(!this.adjacencyList[vertexToRemove]) return null;

        // THIS IS SO BAD....its O(n^2)
        while(this.adjacencyList[vertexToRemove].length){
            const edge = this.adjacencyList[vertexToRemove].pop();
            this.removeEdge(vertexToRemove, edge);
        }
        delete this.adjacencyList[vertexToRemove];
    }

    // start from vertex
    dfsRecursive(startingVertex){
        let result = [];
        let visited = {};

        const helper = (vertex) => {
            if(!vertex){
                return null;
            }

            visited[vertex] = true;
            result.push(vertex);

            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                   helper(neighbour);
                }
            }
        }

        helper(startingVertex);
        return result;
    }

    // this follows the pre order DFS pattern. ( similar )
    dfsIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};

        visited[start] = true;

        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            for(let neighbour of this.adjacencyList[currentVertex]){
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);        
                }
            }
        }
        return result;
    }

    bfs(start){
        let q = [start];
        let visited = {};
        let result = [];
        visited[start] = true;

        let currentVertex;
        while(q.length){
            currentVertex= q.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbour) => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.push(neighbour);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
// g.addVertex('a')
// g.addVertex('b')

// g.addEdge('a','b');
// g.addEdge('a','c')
// g.addEdge('c','z')

// console.log(g.adjacencyList)

// g.removeVertex('a');

// console.log(g.adjacencyList)
// g.removeEdge('a', 'b');
// console.log(g.adjacencyList)
// g.removeEdge('z', 'a');

// console.log(g.adjacencyList)

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

// console.log(g.adjacencyList);

console.log(g.bfs('A'));