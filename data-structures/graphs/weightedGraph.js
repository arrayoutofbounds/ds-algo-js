// undirected graph

const PriorityQueue = require('../trees/priorityQueue');

// class NaivePriorityQueue {
//     constructor(){
//         this.values = []
//     }

//     enqueue(val, priority){
//         this.values.push({val, priority});
//         this.sort();
//     }

//     dequeue(){
//         return this.values.shift();
//     }

//     sort(){
//         this.values.sort((a,b) => a.priority - b.priority);
//     }
// }

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertexName){
        if(!this.adjacencyList[vertexName]){
            this.adjacencyList[vertexName] = [];
        }
    }

    addEdge(vertex1, vertex2, weight){
        // check that vertex exists before adding.
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        // if directed graph, you do not have to add both to each other. You can just do one.
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    removeEdge(vertex1, vertex2){
    
        // if directed graph, you do not have to remove both to each other. You can just do one.
        if(this.adjacencyList[vertex1] ){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v.node !== vertex2);
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v.node !== vertex1);
        }
    }

    removeVertex(vertexToRemove){
        if(!this.adjacencyList[vertexToRemove]) return null;

        // THIS IS SO BAD....its O(n^2)
        while(this.adjacencyList[vertexToRemove].length){
            const vertexInEdge = this.adjacencyList[vertexToRemove].pop();
            this.removeEdge(vertexToRemove, vertexInEdge.node);
        }
        delete this.adjacencyList[vertexToRemove];
    }

    dijkstra(start,finish){
        let queue = new PriorityQueue();
        const distances = {};
        const previous = {}; //  this is just building a shortest path from initial to another node.
        let path = []; // to return at end

        // build up initial state for distances
        // then add each vertex with priority of infinity to priority queue so we know what to get next
        // set up previous
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                queue.enqueue(vertex, 0); // initial distance from initial node to itself is 0
            }else{
                distances[vertex] = Infinity; // distances to all nodes from inital is set to infinity
                queue.enqueue(vertex, Infinity); // priority to all nodes from initial is set to infinity
            }
            previous[vertex] = null;
        }

        // as long as something to visit. REMEMBER, this queue has all the nodes we have NOT YET visited.
        let smallest;
        while(queue.values.length){
            smallest = queue.dequeue().value; // vertex for lowest priority
            if(smallest === finish){
                // if we reach the node we want....we dont need to continue. Djikstras takes smallest node each time.
                // so if we reach where we want, we know we have reached the shortest path
                // done. build path and return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest  || distances[smallest] !== Infinity){
                for(let neighbour of this.adjacencyList[smallest]){
                    // calculate new distance to neighbour

                    // look at previous
                    // look at what the previous node length is
                    // add it if its smaller than current distance.

                    let newNeighbourDistance = distances[smallest] + neighbour.weight; // distance of current node + its neighbour to get total distance to neighbour

                    if(newNeighbourDistance < distances[neighbour.node]){
                        distances[neighbour.node] = newNeighbourDistance; // updating new smallest distance to neighbour from initial node
                        previous[neighbour.node] = smallest; // updating how we got there
                        
                        // enqueue in priority queue with new priority
                        queue.enqueue(neighbour.node, newNeighbourDistance);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

// let wg = new WeightedGraph();

// wg.addVertex('A')
// wg.addVertex('B')
// wg.addVertex('C')

// wg.addEdge('A', 'B', 9);
// wg.addEdge('A', 'C', 5);
// wg.addEdge('B', 'C', 9);

// console.log(wg.adjacencyList);


let graph = new WeightedGraph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("B","E", 3)
graph.addEdge("C","D", 2)
graph.addEdge("C","F", 4)
graph.addEdge("D","E", 3)
graph.addEdge("D","F", 1)
graph.addEdge("E","F", 1)

console.log(graph.dijkstra('A','E'));