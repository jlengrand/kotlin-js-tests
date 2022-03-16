import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

@JsModule("@jlengrand/js-tests")
@JsNonModule
external object Ports{

    val value: String
    fun <T> isSorted(a: Array<T>): Boolean
    fun returnValue(s: String): String
}

fun main() {
    var count: Int by mutableStateOf(0)
    renderComposable(rootElementId = "root") {
        Div({ style { padding(25.px) } }) {
            Button(attrs = {
                onClick { count -= 1 }
            }) {
                Text("-")
            }

            Span({ style { padding(15.px) } }) {
                Text("$count - ")
                Text(Ports.value)
                Text(" - ")
                Text(Ports.isSorted(arrayOf(1,2,3)).toString())
                Text(" - ")
                Text(Ports.returnValue("boumboumbidou"))
            }

            Button(attrs = {
                onClick { count += 1 }
            }) {
                Text("+")
            }
        }
    }
}

