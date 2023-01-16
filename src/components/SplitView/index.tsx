import React from 'react';

export const SplitViewLeft = (props) => {
    return (
        <td className='split-view-left p-2'>
            {props.children}
        </td>
    );
};

export const SplitViewRight = (props) => {
    return (
        <td className='split-view-right p-2'>
            {props.children}
        </td>
    );
};

export const SplitView = (props) => {

  return (
    <table>
        <tbody>
            <tr>
                {props.children}
            </tr>
        </tbody>
    </table>
  );
};
