import React from 'react';


  const Header = () => (
  <header>
    <h1>IPL Teams</h1>
  </header>
);

 const Card = ({ team }) => (
  <div className="card">
    <h2>TEAM NAME:{team.name}</h2>
    <p>CITY NAME:{team.city}</p>
  </div>
);

 const Footer = () => (
  <footer>
    <p>&copy; 2024 IPL Teams</p>
  </footer>
);

const Layout= () => {
    const teams = [
        { name: 'Mumbai Indians', city: 'Mumbai' },
        { name: 'Chennai Super Kings', city: 'Chennai' },
        { name: 'Royal Challengers Bangalore', city: 'Bangalore' },
        { name: 'Kolkata Knight Riders', city: 'Kolkata' },
        { name: 'Sunrisers Hyderabad', city: 'Hyderabad' },
        { name: 'Rajasthan Royals', city: 'Jaipur' },
        { name: 'Delhi Capitals', city: 'Delhi' },
        { name: 'Punjab Kings', city: 'Mohali' },
        { name: 'Lucknow Super Giants', city: 'Lucknow' },
        { name: 'Gujarat Titans', city: 'Ahmedabad' }
      ];
      

  return (
    <div>
      <Header />
      <main>
        {teams.map((team, index) => (
          <Card key={index} team={team}  />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
