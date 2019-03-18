import React from 'react';
import table from '../images/table.png'

const Index = () => (
  <div className="">
    <h4 style={{
      color: `#565347`,
    }}>
      Employee opinion surveys and 360 degree feedback
    </h4>
    <p style={{
      color: `#565347`,
    }}> We can offer a full organisation survey, or one restricted to specific parts of your organisation. </p>
    <table class="table table-bordered table-responsive-sm">
      <thead>
        <tr>
          <th scope="col">Action</th>
          <th scope="col">Opinion Surveys</th>
          <th scope="col"></th>
          <th scope="col">360 Degree Feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Design of the measuring instrument</td>
          <td>Yes</td>
          <td>Off the shelf or tailored</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Data capture manually or electronically</td>
          <td>Yes</td>
          <td></td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Data interpretation: trends/themes/comparisons</td>
          <td>Yes</td>
          <td></td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Discussion of results</td>
          <td>Yes</td>
          <td></td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Communication of results</td>
          <td>Yes</td>
          <td></td>
          <td>Confidential</td>
        </tr>
        <tr>
          <td>Facilitating improvement action</td>
          <td>Yes</td>
          <td></td>
          <td>Coaching</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Index;
