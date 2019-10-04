
import React, {useState, useEffect} from 'react';
import { Bar , Line } from 'react-chartjs-2';
import './chart.scss'; 
 
const chart = (props) => {
  const extractLabelsFromProps = (dataToBeExtract) => props.notes.map((note) => {
     return note[dataToBeExtract]
});

  //complete
  const chart_labels = extractLabelsFromProps("teacher");     
  const chart_datasets_label_complete = 'Trainings complete'; 
  const chart_datasets_data_complete = extractLabelsFromProps("complete"); 
  //duration
  const chart_datasets_label_duration = 'Trainings duration'; 
  const chart_datasets_data_duration = extractLabelsFromProps("duration"); 
  //level
  const chart_datasets_label_level = 'Trainings level'; 
  const chart_datasets_data_level = extractLabelsFromProps("level"); 




  const [chartDataLine_level, setChartDataLine_level] = useState({ 
        labels: [],
        datasets: [{
            backgroundColor: 'rgba(181,91,91, 0.2)',
            borderColor: '#b55b5b',
            data: [],
        }]
  });



  const [chartDataLine_complete, setChartDataLine_complete] = useState({ 
    labels: [],
    datasets: [{
        backgroundColor: 'rgba(181,91,91, 0.2)',
        borderColor: '#b55b5b',
        data: [],
    }]
  });

  const [chartDataLine_duration, setChartDataLine_duration] = useState({ 
    labels: [],
    datasets: [{
        backgroundColor: 'rgba(181,91,91, 0.2)',
        borderColor: '#b55b5b',
        data: [],
    }]
  });

  const [chartDataLine, setChartDataLine] =  useState(chartDataLine_level);

  const [data, setData] = useState();

  useEffect(() => {
    setChartDataLine_complete({
        labels: chart_labels,
        datasets: [{
          label: chart_datasets_label_complete, 
          data: chart_datasets_data_complete
        }]
    });

    setChartDataLine_duration({
      labels: chart_labels,
      datasets: [{
        label: chart_datasets_label_duration, 
        data: chart_datasets_data_duration
      }]
  });

  setChartDataLine_level({
    labels: chart_labels,
    datasets: [{
      label: chart_datasets_label_level, 
      data: chart_datasets_data_level
    }]
});


  }, []); 

 

  useEffect(() => {
    setChartDataLine(chartDataLine_level);
  }, [chartDataLine_level]);

  

  const getChartType = (event) => {
    const elem = event.target.textValue; 
  } 

 const displayChartType = (event) => {
    const chartType = event.target.innerText;
    switch (chartType) {
      case "level" : setChartDataLine(chartDataLine_level); break;  
      case "duration" : setChartDataLine(chartDataLine_duration);  break;
      default : setChartDataLine(chartDataLine_complete);  break;
    }
 }

  
  return(
     <div> 
      <span className='chartDataLine' style={{display:'inline-block'}}>  
        <Line data={chartDataLine} width={690} height={360}/>
      </span>

      <div className='btnContainer' onClick={displayChartType} >
        <button className="btn" data-training="level"> level     </button>
        <button className="btn" data-training="duration"> duration   </button>  
        <button className="btn" data-training="complete"> complete </button> 
      </div>
    </div>
  );
}

export default chart; 