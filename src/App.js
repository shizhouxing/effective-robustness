import './App.scss';
import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import data from './data.json';

function Metadata({data}) {
  const title = data['title'];
  const authors = data['authors'];
  const affiliations = data['affiliations'];
  const paper = data['paper'];
  const code = data['code'];
  const contact = data['contact'];

  document.title = title;

  return (
    <div className="metadata">
      <div className="title">
        {title}
      </div>
      <div className="authors">
        {
          authors.map((author, i) =>
            <span className="author" key={author['name']}>
              <Link href={author['link']} underline="hover" target="_blank">
                {author['name']}
              </Link>
              <sup>{author['affiliation']}</sup>
              {i + 1 === authors.length ? '' : ', '}
            </span>
          )
        }
      </div>
      <div className="affiliations">
        {
          affiliations.map((affiliation, i) =>
            <span className="affiliation" key={affiliation}>
              <sup>{i + 1}</sup>{affiliation}
              {i + 1 === affiliations.length ? '' : ''}
            </span>
          )
        }
      </div>
      <div className="contact">
        <span>Contact: {contact}</span>
      </div>
      <div className="links">
        <Button className="links-button" variant="contained" target="_blank" href={paper}>
          Paper
        </Button>
        <Button className="links-button" variant="contained" target="_blank" href={code}>
          Code
        </Button>
      </div>
    </div>
  )
}

function Plot() {
  const ID2_cifar = ['ImageNet']
  const ID2_imagenet = ['YFCC', 'LAION']
  const OOD_cifar = ['CIFAR-10.1', 'CIFAR-10.2', 'CINIC-10'];
  const OOD_imagenet = [
    'ImageNet-V2', 'ImageNet-R', 'ImageNet-Sketch', 'ObjectNet'];
  const [ID1, setID1] = React.useState('ImageNet');
  const [ID2, setID2] = React.useState('YFCC');
  const [OOD, setOOD] = React.useState('ImageNet-R');
  const [allID2, setAllID2] = React.useState(ID2_imagenet);
  const [allOOD, setAllOOD] = React.useState(OOD_imagenet);

  const updateDatasets = (ID1) => {
    if (ID1 === 'CIFAR-10') {
      setAllID2(ID2_cifar);
      setAllOOD(OOD_cifar);
      setID2('ImageNet');
      setOOD('CIFAR-10.2');
    }
    else if (ID1 === 'ImageNet') {
      setAllID2(ID2_imagenet);
      setAllOOD(OOD_imagenet);
      setID2('YFCC');
      setOOD('ImageNet-R');
    }
    else {
      setAllID2([]);
      setAllOOD([]);
    }
  };

  const handleChangeID1 = (event) => {
    const value = event.target.value
    setID1(value);
    updateDatasets(value);
  };

  const handleChangeID2 = (event) => {
    setID2(event.target.value);
  };

  const handleChangeOOD = (event) => {
    setOOD(event.target.value);
  };

  const getVisualization = () => {
    if (ID1 === 'CIFAR-10') {
      if (OOD === 'CIFAR-10.1') {
        return 'cifar_cifar10_1.html'
      }
      else if (OOD === 'CIFAR-10.2') {
        return 'cifar_cifar102.html'
      }
      else if (OOD === 'CINIC-10') {
        return 'cifar_cinic10.html'
      }
    }
    else if (ID1 === 'ImageNet') {
      console.log(ID2.toLowerCase() + '_' + OOD.toLowerCase().replace('-', '_') + '.html')
      return ID2.toLowerCase() + '_' + OOD.toLowerCase().replace('-', '_') + '.html'
     }
    else {
      return 'about:blank'
    }
  }

  return (
    <div className="plot">
      <h2>Interactive Visualization</h2>
      <div className="dataset">
        <label>ID dataset 1:</label>
        <Select id="select-ID1" value={ID1} label="ID1"
        onChange={handleChangeID1} className="select-dataset">
          <MenuItem value={"CIFAR-10"}>CIFAR-10</MenuItem>
          <MenuItem value={"ImageNet"}>ImageNet</MenuItem>
        </Select>
        <label>ID dataset 2:</label>
        <Select id="select-ID2" value={ID2} label="ID2"
        onChange={handleChangeID2} className="select-dataset">
          {
            allID2.map((item) =>
            <MenuItem value={item} key={item}>{item}</MenuItem>
            )
          }
        </Select>
        <label>OOD dataset:</label>
        <Select id="select-ood" value={OOD} label="ood"
        onChange={handleChangeOOD} className="select-dataset">
          {
            allOOD.map((item) =>
            <MenuItem value={item} key={item}>{item}</MenuItem>
            )
          }
        </Select>
      </div>
      <div className="visualization">
        <iframe title="visualization"
        src={'./plots/' + getVisualization()}></iframe>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Container>
        <Metadata data={data} />
        <Plot />
      </Container>
    </div>
  );
}

export default App;