var firstPage = 1;


function search(){
    event.preventDefault();
    //firstPage = firstPage + 20;
    //console.log(firstPage)
    //console.log(range)
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var url = "https://api.nytimes.com/svc/archive/v1/";
    url += year.value + '/' + month.value + '.json';
    url += '?' + $.param({
        'api-key': "42775621bb0b4c3a980b695424ad93a0"
    });


$.ajax({
  url: url,
  method: 'GET',
  success: (function(result) {
 




class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'Loading...', description: 'Please wait', img: 'giphy.gif', details: this.props.link, index: this.props.index, selected: 0};
    }

  componentDidMount(){
    var link = this.props.link.web_url
    var url = "https://api.linkpreview.net?key=5a8daa00dcae5967162a0b2dc0483ad3d0f47dfb1e9ac&q=";
    url += link;

    
  $.ajax({
    url: "https://api.linkpreview.net/?key=123456&q=https://www.google.com", // put url instead of link
    success: function(result){
                  
                  this.setState({
                    title: result.title,
                    description: result.description,
                    img: result.image,
                    adress: result.url,

                  })

             }.bind(this)
     
})
}

  render(){
    //var det=0
//console.log(this.state.details)
        const tab = 
            <div>
                <table class="grid-item" onClick={() => {
               for (var i=0; i<20; i++){
               document.getElementById(i).style.display = "none";
           }

               document.getElementById(this.state.index).style.display = "block"    
            }
            }>
    	              <thead>
    	              	<th>News</th>
    	              </thead>
    	              <tbody>
    	              	<tr><td><h1>{this.state.title}</h1></td></tr>
    	              	<tr><td><h3>{this.state.description}</h3></td></tr>
    	              	<tr><td><img src={this.state.img}></img></td></tr>

                        <tr><td id={this.state.index} class="details" >{JSON.stringify(this.state.details.web_url + this.state.details.snippet + '<br/>' + this.state.details.byline.original + '<br/>' + this.state.details.headline.print_headline + '<br/>' + this.state.details.pub_date + '<br/>' + this.state.details.word_count , null, 2)}<input type="submit" value="Hide"  onClick={() => {
                        document.getElementById(this.state.index).style.color = "red";
                        document.getElementById(this.state.index).style.visibility = "hidden"
                        }}/></td></tr>

    	              </tbody>
    	               </table>
    	                              
            </div>
  return tab  
}

}

function Next(props){
 console.log("h f n");
 return <p>AAA</p>
}


  function Geturls(props){
    let items = [];
    for (var i=0; i<20; i++){
        const counter = firstPage + i;
console.log(firstPage)
        const item = <div class="item">
        	            	<Preview link={props.data.response.docs[counter]} index={i}/>  	       
        	        </div>
        items.push(item);    
    }

    return <div><div class="grid-container">{items}</div>
    <footer>
   
    <div class="pagination">
    <input class = "page" type="submit" value="<" onClick={() => { if(firstPage < 21){return};firstPage = firstPage - 20; search()}}/>
     <span> Shown {firstPage} - {firstPage+19} page </span>
    
    <input class = "page" type="submit" value=">" onClick={() => { firstPage = firstPage + 20; search()}}/>
    <span> of {props.data.response.docs.length} results </span>
    </div>
    </footer>
    </div>;
}

    ReactDOM.render(<Geturls data={result} />, document.getElementById('root'))
})
})

}