let width = 400; //1200

let height = 400; //580
let margin = 100;

color = d3.scaleLinear()
    .domain([0, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

format = d3.format(",d");



Promise.all([d3.csv("data/SG-budget.csv")])
.then(data => {
    
    console.log(data[0]);

    let groups = d3.rollup(data[0],
        sumAmount,
        function(d) { return  d.financial_year; },
        function(d) { return d.category; },
        function(d) { return d.item; },
        function(d) { return d.sector; },
        function(d) { return d.ministry; }
        //function(d) { return d.type; }
    );
    
     console.log(groups.get('Social Development'))
    

    const root = d3.hierarchy(groups);
    root.sum(function(d) {
        return d[1];
    });
    console.log(root)

    var packLayout = d3.pack()
    .size([height, height]);
    
    packLayout(root);

    let focus = root;
    let view;

    const tooltip = d3.select(".tooltip")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("text-align", "center")

    let svg = d3.select("#diagram")
        .append("svg")
        .style("display", "block")
        .attr("viewBox",`-${width / 2 + margin} -${height / 2 + 5} ${width + margin*2} ${height +10}`)
        .style("cursor", "pointer")
        .on("click", (event) => zoom(event, root));    

    const nodes = svg.append('g')
        //.attr('transform', 'translate(' + width/2 +  ',' + 0 +')')
        .selectAll('circle')
        .data(root.descendants())
        .join('circle')
        .attr("class", d =>d.data[0])
        .attr("fill", d => d.children ? color(d.depth) : "white")
        .attr("pointer-events", d => !d.children ? "none" : null)
        //.on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
        //.on("mouseout", function() { d3.select(this).attr("stroke", null); })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

    const label = svg.append('g')
        //.attr('transform', 'translate(' + width/2 +  ',' + 0 +')')
        .style("font", "10px sans-serif")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(root.descendants())
        .join("text")
        .style("fill-opacity", d => d.parent === root ? 1 : 0)
        .style("display", d => d.parent === root ? "inline" : "none");
        //.text(d => d.data[0]);
        //.text(d => d.value);
    
    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
        const k = height / v[2];
    
        view = v;
        label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        nodes.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        nodes.attr("r", d => d.r * k);
    }

    function zoom(event, d) {
        const focus0 = focus;
        focus = d;
        const transition = svg.transition()
            .duration(event.altKey ? 7500 : 750)
            .tween("zoom", d => {
                //console.log("test"+d)
                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                return t => zoomTo(i(t));
            });
    
        label
            .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .transition(transition)
            .style("fill-opacity", d => d.parent === focus ? 1 : 0)
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }

    function mouseover(d) {
        tooltip
            .style("display", "block")
            .style("opacity", 0.9);
        d3.select(this)
            .transition()
            .style("stroke", "grey")
            .style("opacity", 0.6)
            .style('stroke-width', 2.5 + "px");
    }

    function mousemove(event, d) {
        tooltip
            .html(
                d.data[0] + "<br>" + 
                "$" + d.value/1000 + " billion"
            ) 
            .style("position", "absolute")
            .style("top", (event.pageY - 350)+"px")
            .style("left",(event.pageX + 15)+"px");
    }

    function mouseleave(d) {
        tooltip
            .style("opacity", 0)
            .style("display", "none");
        d3.select(this)
            .transition()
            .style("opacity", 1)
            .style("stroke", null)
    }

})

function sumAmount(group) {
    return d3.sum(group, function(d) {
        return d.amount;
    });
}
