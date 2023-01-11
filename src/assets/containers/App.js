import '../css/App.css';
import Header from '../components/Header'
import Hero from '../components/Hero'
import data from '../data/data.js'
console.log(data)


function App() {
  const cards = data.map(item => {
    return(
      <Hero 
        key={item.id}
        img={item.imageUrl}
        location={item.location}
        title={item.title}
        link={item.googleMapsUrl}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
      />
    )
  })
  return (
    <div>
      <Header />
      <div className='main'>
        {cards}
      </div>
    </div>
  );
}

export default App;