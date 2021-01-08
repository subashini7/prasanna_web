import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);
  let liclass ='';
  if (className == '' && hasChildren) 
    liclass = 'fontsz'
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  // const ncollapsed = (active && hasChildren) ? setCollapsed(url) : null;
  if (active) 
    collapsed[url] = false;
  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          
        </Link>
      )}

      {((!isCollapsed || active)  && hasChildren) ? (
        <ul class={liclass}>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
