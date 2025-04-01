import { getLanguages } from "../_lib/services"
import LanguagesOptions from "./LanguagesOptions"

const Languages =async () => {
    const languages=await getLanguages()

  return (
    <div>
        <LanguagesOptions languages={languages} />
    </div>
  )
}

export default Languages