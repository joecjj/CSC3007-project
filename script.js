let width = 400; //1200

let height = 400; //580
let margin = 50;

// Data: Live data is not possible, but also not needed
// Task : I want to know how much the Singapore government spends and receives per year 

var ordinalColor = d3.scaleOrdinal()
    .domain([
        "",
        "Fiscal Year 2020", // 0
        "2019",
        "2020",
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
        "rgba(0, 0, 0, 0)", // "Fiscal Year 2020"
        "rgb(204, 255, 153, 0.7)", // "2019"
        "rgb(204, 153, 255, 0.7)", // "2020"
        "rgba(125, 255, 235, 0.7)", // "Expenditure"
        "rgba(110, 210, 200, 0.7)", // "Total Expenditure"
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

format = d3.format(",d");

// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------------------------- Graph 1 ---------------------------------------------------------------------  //
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
const bar_margin = {top: 30, right: 30, bottom: 70, left: 60},
bar_width = 860 - bar_margin.left - bar_margin.right,
bar_height = 800 - bar_margin.top - bar_margin.bottom;
Promise.all([d3.csv("data/all-fiscal-position-sg.csv")])
    .then(data => {
        let svg = d3.select("#diagram_1")
            .append("svg")
            .style("display", "block")
            .attr("viewBox", `${-90} ${-30} ${width +150 } ${height+80}`)
            .style("cursor", "pointer")
        let yeargroups = d3.rollup(data[0],
            sumAmount,
            function (d) { return d.financial_year; },
        );
        const yearroot = d3.hierarchy(yeargroups);
        yearroot.sum(function (d) {
            return d[1]
        });
        // X axis
        const x = d3.scaleBand()
            .range([0, width])
            .domain(yearroot.children.map(d => d.data[0]))
            .padding(0.2);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, 250000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));
        // Bars
        max = d3.max(yearroot.children.map(d => d.data[1]))
        //console.log(max)
        //console.log(yearroot.children.map(d => d.data))
        svg.selectAll("mybar")
            .data(yearroot.children.map(d => d.data))
            .join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth()+2)
            .attr("height", d => height - y(d[1]))
            .attr("fill", d => d[1] === max ? 'blue' : "grey")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", width  -70)
            .attr("y", height + margin.top + 150)
            .text("Total Revenue and Expenditure ");
        

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", width -190)
            .attr("y",  bar_margin.left +390 )
            .text("Year");
        
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", bar_margin.left -130)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Amount (Millions)");

        const tooltip = d3.select("#diagram_1")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("text-align", "center");

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
                    d[0] + "<br>" +
                    "$" + d[1] / 1000 + " billion"
                )
                .style("position", "absolute")
                .style("top", (event.pageY - 350) + "px")
                .style("left", (event.pageX + 15) + "px");
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
        
    });
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------------------------- Graph 2 ---------------------------------------------------------------------  //
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //

Promise.all([d3.csv("data/2020-fiscal-position-sg.csv")])
    .then(data => {

        //console.log(data[0]);

        let groups = d3.rollup(data[0],
            sumAmount,
            function (d) { return d.financial_year; },
            function (d) { return d.category; },
            function (d) { return d.item; },
            function (d) { return d.sector; },
            function (d) { return d.ministry; }
            //function(d) { return d.type; }
        );

        //console.log(groups.get('Social Development'))

        //console.log(groups)
        const root = d3.hierarchy(groups);
        root.sum(function (d) {
            //console.log(d[1])
            return d[1];
        });
        //root.sort(d3_layout_packSort);

        var packLayout = d3.pack()
            .size([height, height]);

        packLayout(root);
        //console.log(root)

        let focus = root;
        let view;

        let svg = d3.select("#diagram_2")
            .append("svg")
            .style("display", "block")
            .attr("viewBox", `-${width / 2 + margin} -${height / 2 + 5} ${width + margin * 2} ${height + 10}`)
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
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .transition(transition)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        const tooltip = d3.select("#diagram_2")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("text-align", "center")

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
                    "$" + d.value / 1000 + " billion"
                )
                .style("position", "absolute")
                .style("top", (event.pageY - 1325) + "px")
                .style("left", (event.pageX + 15) + "px");
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

// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------------------------- Graph 3 ---------------------------------------------------------------------  //
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //

Promise.all([d3.csv("data/2019-2020-fiscal-position-sg.csv")])
    .then(data => {
        //console.log(data[0]);

        let groups = d3.rollup(data[0],
            sumAmount,
            function (d) { return d.financial_year; },
            function (d) { return d.category; },
            function (d) { return d.item; },
            function (d) { return d.sector; },
            function (d) { return d.ministry; }
            //function(d) { return d.type; }
        );

        //console.log(groups.get('Social Development'))

        //console.log(groups)
        const root = d3.hierarchy(groups);
        root.sum(function (d) {
            //console.log(d[1])
            return d[1];
        });
        //root.sort(d3_layout_packSort);

        var packLayout = d3.pack()
            .size([height, height]);

        packLayout(root);
        //console.log(root)

        let focus = root;
        let view;

        let svg = d3.select("#diagram_3")
            .append("svg")
            .style("display", "block")
            .attr("viewBox", `-${width / 2 + margin} -${height / 2 + 5} ${width + margin * 2} ${height + 10}`)
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
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .transition(transition)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        const tooltip = d3.select("#diagram_3")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("text-align", "center")

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
                    (d.data[0] ||"Total Amount") + "<br>" +
                    "$" + d.value / 1000 + " billion"
                )
                .style("position", "absolute")
                .style("top", (event.pageY - 2225) + "px")
                .style("left", (event.pageX + 15) + "px");
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

    });

// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------------------------- Graph 4 ---------------------------------------------------------------------  //
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //

Promise.all([d3.csv("data/special-transfers.csv")])
    .then(data => {
        //console.log(data[0]);

        var radius = Math.min(width, height) / 2 - margin

        var increasePercent = parseFloat(data[0][1].amount) / parseFloat(data[0][0].amount) * 100
        console.log(increasePercent)

        let svg = d3.select("#diagram_4")
            .append("svg")
            .style("display", "block")
            .attr("viewBox", `${-width/2} ${-height/2} ${width} ${height}`);

        svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        var pie = d3.pie()
            .value(function(d) {return d.amount; })
        var data_ready = pie(data[0])

        svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(0)
                .outerRadius(radius)
            )
            .attr('fill', function(d){ return(ordinalColor(d.data.financial_year)) })
            //.attr("stroke", "grey")
            //.style("stroke-width", "2px")
            //.style("opacity", 0.7)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);

        svg.append('text')
        .attr("x", -110)
        .attr("y", -10)
        .text("Special Transfers")
        .style("font", "30px sans-serif");
        svg.append('text')
        .attr("dx", -105)
        .attr("y", 10)
        .text("Excluding Top-ups to Endowment and Trust Funds")
        .style("font", "10px sans-serif");
        svg.append('text')
        .attr("dx", -65)
        .attr("y", 40)
        .text(parseInt(increasePercent)-100 + "% increase")
        .style("font", "20px sans-serif");

        const tooltip = d3.select("#diagram_4")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("text-align", "center");

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
                    d.data.financial_year + "<br>" +
                    "$" + d.data.amount / 1000 + " billion"
                )
                .style("position", "absolute")
                .style("top", (event.pageY - 3125) + "px")
                .style("left", (event.pageX + 15) + "px");
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

    });

// ----------------------------------------------------------------------------------------------------------------------------------------------------  //
// --------------------------------------------------------------------- Graph 5 ---------------------------------------------------------------------  //
// ----------------------------------------------------------------------------------------------------------------------------------------------------  //

Promise.all([d3.csv("data/2019-2020-fiscal-position-sg.csv")])
    .then(data => {
        //console.log(data[0]);

        sunWidth = 600
        radius = sunWidth/6;
        
        arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

        let groups = d3.rollup(data[0],
            sumAmount,
            function (d) { return d.financial_year; },
            function (d) { return d.category; },
            function (d) { return d.item; },
            function (d) { return d.sector; },
            function (d) { return d.ministry; }
            //function(d) { return d.type; }
        );

        nestedGroups = ({name: "flare", children: nest(groups)})

        sunburstColor = d3.scaleOrdinal(
            d3.quantize(
                d3.interpolateRainbow, 
                nestedGroups.children.length + 1
            )
        )

        partition = data => {
            const root = d3.hierarchy(data)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value);
            return d3.partition()
                .size([2 * Math.PI, root.height + 1])
            (root);
        }

        const root = partition(nestedGroups);
        
        root.each(d => d.current = d);
        console.log(root);

        let svg = d3.select("#diagram_5")
            .append("svg")
            .style("display", "block")
            .attr("viewBox", `${-250} ${0} ${sunWidth+500} ${sunWidth}`)
            .style("font", "10px sans-serif");

        const g = svg.append("g")
            .attr("transform", `translate(${sunWidth / 2},${sunWidth / 2})`);

        const path = g.append("g")
            .selectAll("path")
            .data(root.descendants().slice(1))
            .join("path")
              .attr("fill", d => { while (d.depth > 1) d = d.parent; return sunburstColor(d.data.name); })
              .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
              .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
              .attr("d", d => arc(d.current));
        
        path.filter(d => d.children)
            .style("cursor", "pointer")
            .on("click", clicked);
        
        path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

        const label = g.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .attr("transform", d => labelTransform(d.current))
            .text(d => d.data.name);
        
        const parent = g.append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("click", clicked);

        function clicked(event, p) {
            parent.datum(p.parent || root);
            root.each(d => d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
            });

            const t = g.transition().duration(750);
            path.transition(t)
                .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
                })
                .filter(function(d) {
                    return +this.getAttribute("fill-opacity") || arcVisible(d.target);
                })
                .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none") 
                .attrTween("d", d => () => arc(d.current));
        
                label.filter(function(d) {
                    return +this.getAttribute("fill-opacity") || labelVisible(d.target);
                    }).transition(t)
                    .attr("fill-opacity", d => +labelVisible(d.target))
                    .attrTween("transform", d => () => labelTransform(d.current));
            }
        
        function arcVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }
        
        function labelVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }
        
        function labelTransform(d) {
            const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const y = (d.y0 + d.y1) / 2 * radius;
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        }

        function nest(rollup) {
            return Array.from(rollup, ([key, value]) =>
              value instanceof Map
                ? { name: key, children: nest(value) }
                : { name: key, value: value }
            );
        }

    });

function sumAmount(group) {
    return d3.sum(group, function (d) {
        return d.amount;
    });
}

function d3_layout_packSort(a, b) {
    return (a.value - b.value);
}
