import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const ExpandablePanel = ({ header, children }) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpand = () => setExpanded(!expanded);
    return (
        <div className=" m-auto border rounded border-green-800 my-1">
            <div className="h-10 d-flex justify-between p-2">
                <div className="flex items-center ">
                    {header}
                </div>
                <div className='cursor-pointer my-auto' onClick={handleExpand}>
                    {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            <div>
                {expanded && <div className="border-t border-t-green-800">{children}</div>}
            </div>
        </div>
    );
}

export default ExpandablePanel;