let width = 400; //1200

let height = 400; //580
let margin = 50;

// Data: Live data is not possible, but also not needed
// Task : I want to know how much the Singapore government spends and receives per year 

var ordinalColor = d3.scaleOrdinal()
    .domain([
        "",
        "Fiscal Year 2021", // 0
            "Expenditure", // 1
                "Total Expenditure", // 2
                    "Social Development", // 3
                        "Education", // 4
                        "National Development", // 5
                        "Health", // 6
                        "Sustainability and the Environment", // 7
                        "Culture, Community and Youth", // 8
                        "Social and Family Development", // 9
                        "Communications and Information", // 10
                        "Social Manpower", // 11
                    "Security and External Relations", // 12
                        "Defence", // 13
                        "Home Affairs", // 14
                        "Foreign Affairs", // 15
                    "Economic Development", // 16
                        "Economic Manpower", // 17
                        "Transport", // 18
                        "Trade and Industry", // 19
                        "Info-Communications and Media Development", // 20
                    "Government Administration", // 21
                        "Finance", // 22
                        "Law", // 23
                        "Organs of State", // 24
                        "Prime Minister's Office", // 25
                "Special Transfers Excluding Top-ups to Endowment and Trust Funds", // 26
                "Top-ups to Endowment and Trust Funds", // 27
                "Interest Costs and Loan Expenses", // 28
                "Capitalisation of Nationally Significant Infrastructure", // 29
                "Depreciation of Nationally Significant Infrastructure", //  30
            "Revenue", // 31
                "Operating Revenue", // 32
                    "Corporate Income Tax", // 33
                    "Personal Income Tax", // 34
                    "Withholding Tax", // 35
                    "Statutory Boards' Contributions", // 36
                    "Assets Taxes", // 37
                    "Customs, Excise and Carbon Taxes", // 38
                    "Goods and Services Tax", // 39
                    "Motor Vehicle Taxes", // 40
                    "Betting Taxes", // 41
                    "Stamp Duty", // 42
                    "Other Taxes", // 43
                    "Vehicle Quota Premiums", // 44
                    "Fees and Charges (Excluding Vehicle Quota Premiums)", // 45
                    "Others", // 46
                "Net Investment Income/Returns Contribution" //  47
    ])
    .range([
        "rgba(0, 0, 0, 0)", // "",
        "rgba(0, 0, 0, 0)", // "Fiscal Year 2021"
            "rgba(39, 245, 217, 0.4)", // "Expenditure"
                "rgba(109, 221, 197, 0.7)", // "Total Expenditure"
                    "rgba(46, 194, 214, 0.7)", // "Social Development"
                        "rgba(25, 112, 123, 0.7)", // "Education"
                        "rgba(25, 112, 123, 0.7)", // "National Development"
                        "rgba(25, 112, 123, 0.7)", // "Health"
                        "rgba(25, 112, 123, 0.7)", // "Sustainability and the Environment"
                        "rgba(25, 112, 123, 0.7)", // "Culture, Community and Youth"
                        "rgba(25, 112, 123, 0.7)", // "Social and Family Development"
                        "rgba(25, 112, 123, 0.7)", // "Communications and Information"
                        "rgba(25, 112, 123, 0.7)", // "Manpower"
                    "rgba(66, 126, 206, 0.7)", // "Security and External Relations"
                        "rgba(44, 83, 137, 0.7)", // "Defence"
                        "rgba(44, 83, 137, 0.7)", // "Home Affairs"
                        "rgba(44, 83, 137, 0.7)", // "Foreign Affairs"
                    "rgba(57, 193, 84, 0.7)", // "Economic Development"
                        "rgba(38, 123, 55, 0.7)", // "Manpower"
                        "rgba(38, 123, 55, 0.7)", // "Transport"
                        "rgba(38, 123, 55, 0.7)", // "Trade and Industry"
                        "rgba(38, 123, 55, 0.7)", // "Info-Communications and Media Development"
                    "rgba(207, 211, 73, 0.7)", // "Government Administration"
                        "rgba(137, 140, 46, 0.7)", // "Finance"
                        "rgba(137, 140, 46, 0.7)", // "Law"
                        "rgba(137, 140, 46, 0.7)", // "Organs of State"
                        "rgba(137, 140, 46, 0.7)", // "Prime Minister's Office"
                "rgba(109, 221, 197, 0.7)", // "Special Transfers Excluding Top-ups to Endowment and Trust Funds"
                "rgba(109, 221, 197, 0.7)", // "Top-ups to Endowment and Trust Funds"
                "rgba(109, 221, 197, 0.7)", // "Interest Costs and Loan Expenses"
                "rgba(109, 221, 197, 0.7)", // "Capitalisation of Nationally Significant Infrastructure"
                "rgba(109, 221, 197, 0.7)", // "Depreciation of Nationally Significant Infrastructure"
            "rgba(245, 39, 39, 0.4)", // "Revenue"
                "rgba(228, 109, 109, 0.7)", // "Operating Revenue"
                    "rgba(155, 17, 99, 0.7)", // "Corporate Income Tax"
                    "rgba(155, 17, 99, 0.7)", // "Personal Income Tax"
                    "rgba(155, 17, 99, 0.7)", // "Withholding Tax"
                    "rgba(155, 17, 99, 0.7)", // "Statutory Boards' Contributions"
                    "rgba(155, 17, 99, 0.7)", // "Assets Taxes"
                    "rgba(155, 17, 99, 0.7)", // "Customs, Excise and Carbon Taxes"
                    "rgba(155, 17, 99, 0.7)", // "Goods and Services Tax"
                    "rgba(155, 17, 99, 0.7)", // "Motor Vehicle Taxes"
                    "rgba(155, 17, 99, 0.7)", // "Betting Taxes"
                    "rgba(155, 17, 99, 0.7)", // "Stamp Duty"
                    "rgba(155, 17, 99, 0.7)", // "Other Taxes"
                    "rgba(155, 17, 99, 0.7)", // "Vehicle Quota Premiums"
                    "rgba(155, 17, 99, 0.7)", // "Fees and Charges (Excluding Vehicle Quota Premiums)"
                    "rgba(155, 17, 99, 0.7)", // "Others"
                "rgba(228, 109, 109, 0.7)", // "Net Investment Income/Returns Contribution" 
    ]);

color = d3.scaleLinear()
    .domain([0, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

format = d3.format(",d");

Promise.all([d3.csv("data/everything-fiscal-position-sg.csv")])
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
    

    const root = d3.hierarchy(groups);
    root.sum(function(d) {
        return d[1];
    });
    //root.sort(d3_layout_packSort);

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
        //.attr("class", d =>d.data[0])
        //.attr("fill", d => d.children ? color(d.depth) : "white")
        .attr("fill", d => ordinalColor(d.data[0]))
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
        const k = width / v[2];
    
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
            .style("stroke", "white")
            .style("opacity", 0.6)
            .style('stroke-width', 2 + "px");
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

function d3_layout_packSort(a, b) {
    return (a.value - b.value);
}
