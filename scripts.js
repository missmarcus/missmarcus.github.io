var graph = Viva.Graph.graph();
        graph.addLink(1, 2,);
        graph.addLink(2, 3,);
        graph.addLink(3, 4,);
        graph.addLink(1, 4,);
        graph.addLink(2, 4,);
        graph.addLink(1, 3,);
        
        // specify where it should be rendered:
        var renderer = Viva.Graph.View.renderer(graph, {
          container: document.getElementById('graphDiv')
        });
        renderer.run();