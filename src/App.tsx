import React, {useContext} from 'react';
import {MyContext} from './context';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  const {skills} = useContext(MyContext);
  return (
    <div className="app">
      <section className="app-info">
        <div className="app-info__section">
          <h1 className="app-info__texto">
            {skills.map(skill => (
              <p key={skill.id}>{skill.name}</p>
            ))}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default App;
