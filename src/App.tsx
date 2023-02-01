import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Movies from './component/Movies'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import TVShows from './component/TVShows';



function App() {


  return (
    <>
  
    <Nav />

    <div className='allmovies'>
    <CardGroup>
      <Card >
        <Card.Img variant="top mt-2 p-2" src="https://lumiere-a.akamaihd.net/v1/images/image_0240ae6a.jpeg" />
        <Card.Body p-5 m-5>
          <Card.Title>The Little Mermaid</Card.Title>
          <Card.Text>
          <br></br>
          Release Date: May 26, 2023 <br></br>
          Genre: Action-Adventure, Comedy, Science Fiction <br></br>
          <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={false} /> <br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :8.3 </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top mt-2 p-2" src="https://lumiere-a.akamaihd.net/v1/images/au_poster_marvel_guardiansofthegalaxyvol3_be90026a.jpeg" />
        <Card.Body>
          <Card.Title>Guardians of the Galaxy Vol. 3</Card.Title>
          <Card.Text><br></br>
          Date:March 10, 2021 <br></br>
          Genre: Action-Adventure, Comedy, Science Fiction <br></br>
          <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={true} /><br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :5.7 </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top mt-2 p-2" src="https://lumiere-a.akamaihd.net/v1/images/au_poster_marvel_antmanquantumaniapayoff_4067ec05.jpeg" />
        <Card.Body>
          <Card.Title>Ant-Man and the Wasp:Quantumania</Card.Title>
          <Card.Text>
          <br></br>
           Date:Dec 5, 2020 <br></br>
          Genre: Action-Adventure, Comedy, Science Fiction <br></br>
          <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={true} /><br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :3.3 </small>
        </Card.Footer>
      </Card>
    </CardGroup>

            {/* TVSHOWS */}


    <CardGroup >
      <Card >
        <Card.Img variant="top mt-2 p-2" src="https://bestlifeonline.com/wp-content/uploads/sites/3/2019/11/lost-tv-show.jpg?resize=768,1188&quality=82&strip=all" />
        <Card.Body p-5 m-5>
          <Card.Title>lOST</Card.Title>
          <Card.Text>
          <br></br>
           Date: Sep 22, 2004 <br></br>
          Genre: Adventure , Mystery , Serial drama , Science fiction ,Supernatural fiction <br></br>
          <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={true} /><br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :8.3 </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top mt-2 p-1" src="http://cdn.shopify.com/s/files/1/0036/7637/3061/collections/8wnP.gif?v=1602510609" />
        <Card.Body>
          <Card.Title>F.R.I.E.N.D.S</Card.Title>
          <Card.Text><br></br>
          Date:Sep 22, 1994 <br></br>
          Genre: Sitcom <br></br>
          <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={true} /> <br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :5.7 </small>
        </Card.Footer>
      </Card>
      <Card>
        <p className='card3'>
        <Card.Img variant="top mt-2 p-1" src="https://flxt.tmsimg.com/assets/p12975383_b_v9_aa.jpg" /></p>
        <Card.Body>
          <Card.Title>ELENA OF AVALOR</Card.Title>
          <Card.Text>
          <br></br>
           Date:May 5, 2023 <br></br>
          Genre: Action-Adventure, Comedy <br></br>
          <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={false} /> <br></br>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Evaluation :3.3 </small>
        </Card.Footer>
      </Card>
    </CardGroup>
    


    
    {/* <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={} />
    <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={} />
    <Movies img={''}  name={""} date={""} evaluation={""} Availablenow={} />
   
    



    <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={} />
    <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={} />
    <TVShows img={''}  name={""} date={""} evaluation={""} Availablenow={} /> */}

    
    <Footer />
    </div>
    
    </>
  )
}

export default App
