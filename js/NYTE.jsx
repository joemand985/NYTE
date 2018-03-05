var firstPage = 1;


function search(){
    event.preventDefault();
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
    url: url, //"https://api.linkpreview.net/?key=123456&q=https://www.google.com", // put <url,> instead of link
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

    const j = {
           'web url': this.state.details.web_url,
           'snippet': this.state.details.snippet,
           'original': this.state.details.byline.original,
           'headline': this.state.details.headline.print_headline,
           'date': this.state.details.pub_date,
           'word count': this.state.details.word_count  
    }

    const tab = 
        <div>
            <table class="grid-item" onClick={
                () => {
                    const display = document.getElementById(this.state.index).style.display
                    for (var i=0; i<20; i++){
                       if(i === this.state.index){
                            if(!display || display === "none"){
                                document.getElementById(this.state.index).style.display = "block"
                            } else {
                                document.getElementById(this.state.index).style.display = "none"
                            }       
                       } else {
                            document.getElementById(i).style.display = "none"
                       }
                    }
                }
            }>
              <thead>
              	<th>News</th>
              </thead>
              <tbody>
              	<tr><td><h1>{this.state.title}</h1></td></tr>
              	<tr><td><h3>{this.state.description}</h3></td></tr>
              	<tr><td><img src={this.state.img}></img></td></tr>
                <tr>
                    <td id={this.state.index} className="details" >
                        <pre>{
                            JSON.stringify(j, null, 2)
                        }</pre>
                    </td>
                </tr>
              </tbody>
	       </table>                       
        </div>
        console.log("a")
  return tab 
}

}



  function Geturls(props){
    let items = [];
    for (var i=0; i<6; i++){
        const counter = firstPage + i;
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
    <img id="api_logo" src="poweredby_nytimes_150a.png"/>
    </footer>
    </div>;
}

    ReactDOM.render(<Geturls data={result} />, document.getElementById('root'))
})
})

}